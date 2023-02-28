declare module "react-reveal/Fade";

interface Section {
  title: string;
  description: string;
  backgroundImg: string;
  leftBtnText: string;
  rightBtnText?: string;
  id: string;
  slug: string;
}

interface IProduct {
  slug: string;
  title: string;
  description: string;
  backgroundImg: string;
  col1Text?: string;
  col1Desc?: string;
  col2Text?: string;
  col2Desc?: string;
  col3Text?: string;
  col3Desc?: string;
  col4Text?: string;
  col4Desc?: string;
  btnText?: string;
}
