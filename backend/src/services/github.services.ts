export const findUser = async (username) => {
  try {
    const availUser = await User.findOne({ username });

    return availUser;
  } catch (error) {
    throw error;
  }
};

export const save = async (userData) => {
  try {
    const availUser = await User(userData);
    availUser.save();

    return availUser;
  } catch (error) {
    throw error;
  }
};

export const getSetMutual = async (username, followers, following) => {
  try {
    const mutuals = followers.filter((item1) =>
      following.some((item2) => item1.id === item2.id)
    );

    const user = await User.findOne(username);

    if (user && user.friends.length > 0) {
      const mutualFriends = await User.find({
        username: { $in: user.mutualFriends },
      });
      return mutualFriends;
    } else {
      if (mutuals.length > 0) {
        user.mutualFriends = mutuals.map((mutual) => mutual.id);
        await user.save();
      }

      return mutuals;
    }
  } catch (error) {
    throw error;
  }
};

export const search = async (filters) => {
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

export const update = async (username, updateData) => {
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
