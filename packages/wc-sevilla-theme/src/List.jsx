import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";

const Items = styled.div`
  & > div {
    margin: 16px 0;
    font-size: 1.2em;
  }
`;

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  
  return (
    <Items>
      {data.items &&
        data.items.map(({ id }) => {
          const post = state.source.post[id];
          return (
            <Link key={id} href={post.link}>
              {post.title.rendered}
            </Link>
          );
        })}
    </Items>
  );
};

export default connect(List);
