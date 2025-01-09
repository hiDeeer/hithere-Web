"use client";
import { Container, Wrap } from "./style";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <Container>
        {/* {pathname !== "/sign"} */}
        <Wrap>
          {children}
          <div id="modal"></div>
        </Wrap>
      </Container>
    </>
  );
};

export default Layout;