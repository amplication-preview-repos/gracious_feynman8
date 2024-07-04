import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VoterList } from "./voter/VoterList";
import { VoterCreate } from "./voter/VoterCreate";
import { VoterEdit } from "./voter/VoterEdit";
import { VoterShow } from "./voter/VoterShow";
import { ElectionList } from "./election/ElectionList";
import { ElectionCreate } from "./election/ElectionCreate";
import { ElectionEdit } from "./election/ElectionEdit";
import { ElectionShow } from "./election/ElectionShow";
import { VoteList } from "./vote/VoteList";
import { VoteCreate } from "./vote/VoteCreate";
import { VoteEdit } from "./vote/VoteEdit";
import { VoteShow } from "./vote/VoteShow";
import { BlockList } from "./block/BlockList";
import { BlockCreate } from "./block/BlockCreate";
import { BlockEdit } from "./block/BlockEdit";
import { BlockShow } from "./block/BlockShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VotingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Voter"
          list={VoterList}
          edit={VoterEdit}
          create={VoterCreate}
          show={VoterShow}
        />
        <Resource
          name="Election"
          list={ElectionList}
          edit={ElectionEdit}
          create={ElectionCreate}
          show={ElectionShow}
        />
        <Resource
          name="Vote"
          list={VoteList}
          edit={VoteEdit}
          create={VoteCreate}
          show={VoteShow}
        />
        <Resource
          name="Block"
          list={BlockList}
          edit={BlockEdit}
          create={BlockCreate}
          show={BlockShow}
        />
      </Admin>
    </div>
  );
};

export default App;
