import { getAll, saveAll } from '../services/users';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAll();
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

export const saveAllUsers = async (req, res, next) => {
  try {
    const users = await saveAll();
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};
