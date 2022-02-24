import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const designsDir = '/content/designs';

export interface IDesignData {
  id: string;
  name: string;
  repo?: string;
  firmware?: string;
  qmk?: string;
  via?: string;
  vial?: string;
  date: string;
  img?: string;
  path?: string;
}

export function getDesignsFolders() {
  const designsFolders = fs
    .readdirSync(`${process.cwd()}/public${designsDir}`)
    .map((folder) => ({
      dir: folder,
      file: 'index.md',
    }));

  return designsFolders;
}

export function getSortedDesignsData() {
  // Get design folders
  const designFolders = getDesignsFolders();

  // Read design data from design files
  const designs = designFolders.map(({ dir, file }) => {
    const fileContents = fs
      .readFileSync(`public/content/designs/${dir}/${file}`)
      .toString();

    const { data } = matter(fileContents);

    return {
      id: dir,
      ...(data as Omit<IDesignData, 'id'>),
    };
  });

  return designs.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllDesignIds() {
  const fileNames = fs.readdirSync(`${process.cwd()}/public${designsDir}`);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getDesignData(id: string) {
  const fullPath = `public/content/designs/${id}/index.md`;
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
    ...(matterResult.data as Omit<IDesignData, 'id'>),
  };
}
