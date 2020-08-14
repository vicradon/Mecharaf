import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "./Link";
import List from "./List";
import Post from "./Post";
import Toggle from "./Toggle";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.isPostType
      ? "background-color: aliceblue"
      : "background-color: mintcream"};

  h1 {
    font-size: 3em;
    text-align: center;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin: 16px;
  }
`;

const Main = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 16px;

  img {
    max-width: 100%;
  }
`;

const Button = styled.button`
  width: 92px;
  margin: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  color: black;
  font-weight: bold;
`;

const Root = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const { mode } = state.theme;

  return (
    <>
      <Head>
        <title>Mechraf</title>
        <meta name="description" content="Mechraf test site with frontity!" />
      </Head>
      <Global
        styles={css`
          html {
            font-family: sans-serif;
          }
          body {
            background-color: ${mode === "light" ? "#fff" : "#222"};
            color: ${mode === "light" ? "#222" : "#fff"};
          }
        `}
      />
      <Header isPostType={data.isPostType}>
        <h1>Mechraf</h1>
        <p>Currently in {state.router.link}</p>
        {state.theme.isMenuOpen ? (
          <>
            <Button onClick={actions.theme.closeMenu}>Close</Button>
            <Menu>
              <Link href="/">Home</Link>
            </Menu>
          </>
        ) : (
          <Button onClick={actions.theme.openMenu}>Menu</Button>
        )}
      </Header>

      <Toggle />
      <hr />
      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Post />}
      </Main>

      {state.frontity.platform === "client" && data.isPost && (
        <libraries.comments.Comments />
      )}
    </>
  );
};

export default connect(Root);
