import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import router from "next/router";
import { authOptions } from "pages/api/auth/[...nextauth]";
import React, { useEffect } from "react";

const AboutPage = async () => {
  console.log("About page children")
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>About page</div>;
      <div>
        {!session ? (<h1>User User is not authentificated</h1>
        ) : (
          <h1>{session?.user.name} About Our company</h1>
        )}
      </div>
    </>
  );
};

export default AboutPage;
