import { User } from "./user.model";

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastUser?.id;
};

// export const generatedUserId = async () => {
//   const currentId = (await findLastUserId()) || (0).toString().padStart(6, "0");

//   const newId = (parseInt(currentId) + 1).toString().padStart(5,'0')
//   return newId;
// };

export const generatedUserId = async () => {
  // hudai
  const currentYear = new Date().getFullYear();
  const defaultId = `310${currentYear}00000`;

  const currentId = (await findLastUserId()) || defaultId;

  const newId = (parseInt(currentId) + 1).toString();
  return newId;
};
