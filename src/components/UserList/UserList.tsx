import React from "react";
import { GithubProfileList } from "../../lib/github";

type UserListPros = {
  userList: GithubProfileList;
};

function UserList(userList: UserListPros) {
  const list = userList.userList;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>섬네일</th>
            <th>아이디</th>
            <th>이메일</th>
          </tr>
        </tbody>

        {Array.isArray(list) &&
          list.map(user => (
            <tbody key={user.id}>
              <tr>
                <td>
                  <img src={user.avatar_url} alt="user thumbnail" />
                </td>
                <td>{user.login}</td>
                <td>{user.html_url}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

UserList.defaultProps = {
  userList: []
};

export default UserList;
