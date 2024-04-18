import { Request, Response } from "express";
import {
  deletes,
  findUser,
  getSetMutual,
  listAllUser,
  save,
  search,
  update,
} from "../services/github.services.ts";
import { Filters } from "../interface/filters.interface.ts";
import { SortOptions } from "../interface/sortOptions.interface.ts";
import { User } from "../interface/user.interface.ts";

export const saveUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    // if user is available on database
    const isUser = await findUser(username);
    if (isUser) return res.status(200).json(isUser);

    // if not available
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    console.log(data);
    const userData : User = {
      username: data.login,
      id: data.id,
      avatar_url: data.avatar_url,
      type: data.type,
      name: data.name,
      company: data.company,
      blog: data.blog,
      location: data.location,
      email: data.email,
      bio: data.bio,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      created_at: data.created_at,
      updated_at: data.updated_at,
    };

    const newUser = await save(userData);

    return res.status(200).json(newUser);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const findMutuals = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    const followerRes = await fetch(
      `https://api.github.com/users/${username}/followers`
    );
    const followers = await followerRes.json();

    const followingRes = await fetch(
      `https://api.github.com/users/${username}/following`
    );
    const following = await followingRes.json();

    const mutuals = await getSetMutual(
      username,
      followers,
      following
    );

    return res.status(200).json(mutuals);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const searchUsers = async (req: Request, res: Response) => {
  try {
    const { username, location, type, company }  = req.query;
    const filters : Filters = {};

    if (username && typeof username === "string") filters.username = username;
    if (location && typeof location === "string") filters.location = location;
    if (type && typeof type === "string") filters.type = type;
    if (company && typeof company === "string") filters.company = company;

    const users = await search(filters);

    return res.status(200).json(users);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    const doesUserExists = await findUser(username);
    if (!doesUserExists)
      return res.status(403).json({ message: "User does not exists!" });

    const user = await deletes(username);
    return res.status(201).json(user);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const username : string = req.params.username as string;
    const updateData = req.body;

    const doesUserExists = await findUser(username);
    if (!doesUserExists)
      return res.status(403).json({ message: "User does not exists!" });

    const user = await update(username, updateData);
    return res.status(201).json(user);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const listUser = async (req: Request, res: Response) => {
  try {
    const { sortBy } = req.query;

    const sortOptions : SortOptions = {};

    if (sortBy) {
      if (sortBy === "public_repos") {
        sortOptions.public_repos = 1;
      } else if (sortBy === "followers") {
        sortOptions.followers = -1;
      }
    }
    const users = await listAllUser(sortOptions);

    return res.status(200).json(users);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
