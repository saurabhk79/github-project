import { Filters } from "../interface/filters.interface";
import { UserInterface } from "../interface/user.interface";
import User from "../models/User";

export const findUser = async (login: string) => {
    try {
        const availUser = await User.findOne({ login });
        console.log(availUser);

        return availUser;
    } catch (error) {
        throw error;
    }
};

export const save = async (userData: UserInterface) => {
    try {
        const availUser = await User.create(userData);
        availUser.save();

        return availUser;
    } catch (error) {
        throw error;
    }
};

export const getSetMutual = async (
    username: string,
    followers: [UserInterface],
    following: [UserInterface]
) => {
    try {
        const mutuals = followers.filter((item1) =>
            following.some((item2) => item1.id === item2.id)
        );

        const user = await User.findOne({ username });

        // if (user && user.friends.length > 0) {
        //   const mutualFriends = await User.find({
        //     username: { $in: user.mutualFriends },
        //   });
        //   return mutualFriends;
        // } else {
        //   if (mutuals.length > 0) {
        //     user.mutualFriends = mutuals.map((mutual) => mutual.id);
        //     await user.save();
        //   }

        return mutuals;
        // }
    } catch (error) {
        throw error;
    }
};

export const search = async (filters: Filters) => {
    try {
        const users = await User.find(filters);

        return users;
    } catch (error) {
        throw error;
    }
};

export const deletes = async (username) => {
    try {
        const user = await User.deleteOne({ username });

        return user;
    } catch (error) {
        throw error;
    }
};

export const update = async (username: string, updateData) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { username },
            { $set: updateData },
            { new: true }
        );

        return updatedUser;
    } catch (error) {
        throw error;
    }
};

export const listAllUser = async (sortby) => {
    try {
        const users = await User.find().sort(sortby);

        return users;
    } catch (error) {
        throw error;
    }
};
