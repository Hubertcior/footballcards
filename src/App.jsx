import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LeaguesList from "@/components/Leagues/LeagueList.jsx";
import TeamsList from "@/components/Teams/TeamList.jsx";
import PlayerList from "@/components/Players/PlayerList.jsx";
import Layout from "@/components/UI/Layout.jsx";
import PlayerInfo from "@/components/PlayerInfo/PlayerInfo.jsx";
import PackAnimation from "@/components/PackOpening/PackAnimation.jsx";
import Login from "@/components/Login/Login.jsx";
import TopUsers from "@/components/TopUsers/TopUsers.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/leagues" replace />} />
                    <Route path="leagues" element={<LeaguesList />} />
                    <Route path="leagues/:leagueName" element={<TeamsList />} />
                    <Route path="leagues/:leagueName/:teamID" element={<PlayerList />} />
                    <Route path="leagues/:leagueName/:teamID/:playerID" element={<PlayerInfo />} />
                    <Route path="pack-opening" element={<PackAnimation/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="top-users" element={<TopUsers/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
