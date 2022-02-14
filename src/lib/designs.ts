import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const dir = '/content/designs';
const designsDirectory = path.join('.', dir);

export interface IDesignData {
  id: string;
  name: string;
  repo?: string;
  firmware?: string;
  date: string;
  img?: string;
  path?: string;
}

export function getSortedDesignsData() {
  // Get file names under /designs
  const fileNames = fs.readdirSync(designsDirectory);
  const allDesignsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(designsDirectory, fileName, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      path: dir,
      ...(matterResult.data as Omit<IDesignData, 'id'>),
    };
  });
  // Sort designs by date
  return allDesignsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllDesignIds() {
  const fileNames = fs.readdirSync(designsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getDesignData(id: string) {
  const fullPath = path.join(designsDirectory, `${id}/index.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    path: dir,
    ...(matterResult.data as Omit<IDesignData, 'id'>),
  };
}
