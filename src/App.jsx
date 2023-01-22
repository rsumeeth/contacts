import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { css } from "@emotion/react";
import ContactList from "./ContactList";
import { useRef } from "react";

function Header({ onSearch }) {
  const searchElementRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    onSearch(searchElementRef.current.value);
  }
  return (
    <header
      css={css`
        border-bottom: 1px solid;
        padding: 16px;
      `}
    >
      <form
        css={css`
          display: flex;
          justify-content: space-between;
        `}
        onSubmit={onSubmit}
      >
        <input
          ref={searchElementRef}
          css={css`
            padding: 8px;
          `}
          type="text"
        />
        <button>Search</button>
      </form>
    </header>
  );
}

function Sidenav() {
  const [searchText, setSearchText] = useState("");

  function onSearch(text) {
    setSearchText(text);
  }
  return (
    <aside
      css={css`
        border-right: 1px solid;
        display: grid;
        grid-template-rows: auto 1fr auto;
      `}
    >
      <Header onSearch={onSearch} />
      <section
        css={css`
          padding: 16px;
          height: 800px;
          overflow: auto;
          ::-webkit-scrollbar {
            width: 10px;
            background-color: #f5f5f5;
          }

          ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #555;
          }
        `}
      >
        <ContactList searchText={searchText} />
      </section>
      <footer
        css={css`
          border-top: 1px solid;
          padding: 16px;
        `}
      >
        Footer
      </footer>
    </aside>
  );
}

function Contents() {
  return (
    <section>
      <Outlet />
    </section>
  );
}

export function Layout() {
  return (
    <>
      <main
        css={css`
          display: grid;
          grid-template-columns: minmax(250px, 25%) 1fr;
          height: 100%;
        `}
      >
        <Sidenav />
        <section>
          <Contents />
        </section>
      </main>
    </>
  );
}
