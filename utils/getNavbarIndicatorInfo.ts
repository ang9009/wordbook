export default function getNavbarIndicatorInfo(path: string) {
  const page = path.substring(1).split("/")[1];

  switch (page) {
    case undefined:
      return { n: 1, marginTop: 80 };
    case "search":
      return { n: 2, marginTop: 143 };
    case "account":
      return { n: 3, marginTop: 205 };
    case "themes":
      return { n: 4, marginTop: 268 };
    default:
      return null;
  }
}
