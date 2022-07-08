import { useQuery } from "react-query";
import { useRouter } from "next/router";

import WordCard from "./WordCard";
import getList from "../queries/getList";

const VocabularySection = () => {
  const router = useRouter();
  const listId = router.query.listId as string;
  const {
    data: { data: list, error },
  } = useQuery(["words", listId], () => getList(listId as string));

  return (
    <>
      <section>
        {list.words.map((wordObject, i) => (
          <WordCard wordObject={wordObject} number={i} key={wordObject.id} />
        ))}
      </section>

      <style jsx>{`
        section {
          width: 100%;
          margin-top: 20px;
          margin-bottom: var(--navBarPaddingTop);
          border: ${list.words.length === 0 || "1px solid var(--borderColor)"};
          border-radius: 12px;
          background: var(--cardBackgroundColor);
        }
      `}</style>
    </>
  );
};

export default VocabularySection;
