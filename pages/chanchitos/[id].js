import { useIsMounted } from "../../hooks/useIsMounted";
import { useRouter } from "next/router";

export const ChanchitoDinamico = () => {
  const { loaded } = useIsMounted();
  const router = useRouter();

  if (!loaded) {
    return null;
  }
  console.log({ router }, router.query.id);
  return (
    <div>
      <p>Chanchito dinamico</p>
    </div>
  );
};

export default ChanchitoDinamico;
