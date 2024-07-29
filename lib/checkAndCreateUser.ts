import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const checkAndCreateUser = async () => {
  const user = await currentUser();

  // User signed in?
  if ( ! user ) {
    return null;
  }

  // User already in DB?
  const loggedInUser = await db.user.findUnique( {
    where: {
      clerkUserID: user.id
    }
  } );

  // Return user if in DB
  if ( loggedInUser ) return loggedInUser;

  // Add user to DB if not already
  const newUser = await db.user.create( {
    data: {
      clerkUserID: user.id,
      name: `${ user.firstName } ${ user.lastName }`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  } );

  return newUser;
};
