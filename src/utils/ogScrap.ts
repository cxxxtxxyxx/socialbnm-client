import ky from 'ky';

export type IOgScrap = {
  title?: string;
  image: string;
  desc?: string;
};

const ogScrap = async (url: string) => {
  const result: string = await ky(url).text();
  const og = result.match(/^<meta property="og(.*?)+>$/gi);
};
