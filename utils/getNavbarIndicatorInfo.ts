export default function getNavbarIndicatorInfo(path: string) {
  const page = path.substring(1);

  switch (page) {
    case "home":
      return { n: 1, marginTop: 80 };
    case "home/search":
      return { n: 2, marginTop: 143 };
    case "home/account":
      return { n: 3, marginTop: 205 };
    case "home/themes":
      return { n: 4, marginTop: 268 };
    default:
      return null;
    //    TODO: fix this lmao
  }
}
