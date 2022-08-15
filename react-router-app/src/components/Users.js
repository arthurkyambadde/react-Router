import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <div>user 1</div>
      <div>user 2</div>
      <div>user 3</div>
      <Outlet />
      <div>
        <button
          onClick={() => {
            setSearchParams({ filter: "active" });
          }}
        >
          Active Users
        </button>
        <button
          onClick={() => {
            setSearchParams({});
          }}
        >
          Active Users
        </button>
      </div>
      {showActiveUsers ? (
        <h2>showing active users</h2>
      ) : (
        <h2>showing all users</h2>
      )}
    </div>
  );
};
