components/UserStatsNavbar.js

import { useState, useEffect } from "react";

const UserStatsNavbar = () => {
  const [userStats, setUserStats] = useState({
    totalSignedUp: 0,
    totalLoggedIn: 0,
  });

  useEffect(() => {
    // Fetch user stats (Replace this with actual API call)
    const fetchUserStats = async () => {
      try {
        const response = await fetch("/api/user-stats");
        const data = await response.json();
        setUserStats({
          totalSignedUp: data.totalSignedUp,
          totalLoggedIn: data.totalLoggedIn,
        });
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };

    fetchUserStats();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md w-64">
      <h2 className="text-lg font-semibold mb-4">User Statistics</h2>
      <div className="flex flex-col gap-3">
        <div className="bg-gray-800 p-3 rounded-md">
          <p className="text-sm text-gray-400">Total Signed Up</p>
          <p className="text-xl font-bold">{userStats.totalSignedUp}</p>
        </div>
        <div className="bg-gray-800 p-3 rounded-md">
          <p className="text-sm text-gray-400">Total Logged In (Today)</p>
          <p className="text-xl font-bold">{userStats.totalLoggedIn}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStatsNavbar;
