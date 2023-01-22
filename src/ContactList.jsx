import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { css } from "@emotion/react";

export default function ContactList({ searchText }) {
  const contacts = useLoaderData() ?? []; //We can access loader data with this hook, anywhere in the route components
  const filteredContacts = contacts.filter((contact) => {
    const { first, last } = contact.name;
    return (
      first.toLowerCase().includes(searchText.toLowerCase()) ||
      last.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  console.log(contacts);
  return (
    <>
      <div>ContactList</div>
      <ul
        css={css`
          list-style: none;
          padding: 0px;
        `}
      >
        {filteredContacts?.length
          ? filteredContacts.map((contact) => {
              let {
                id: { value },
                name: { first, last },
              } = contact;
              return (
                <li key={value}>
                  <NavLink
                    css={css({
                      display: "block",
                      padding: "4px 8px",
                      textDecoration: "none",
                      color: "royalblue",
                      "&.active": {
                        background: "royalblue",
                        color: "white",
                        borderRadius: "10px",
                      },
                    })}
                    to={`/contacts/${value}`}
                  >{`${first} ${last}`}</NavLink>
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
}
