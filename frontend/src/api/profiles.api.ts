import { getToken } from "api";
import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const getProfileApi = async (id: string) => {
  try {
    const { data } = await axios.get(`${apiUrl}/profile/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

const getRecommendedAudiosApi = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/profile/recommended`, {
      headers: {
        Authorization: `Bearer=${await getToken()}`,
      },
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

const getAudiosTotalCountByProfile = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/profile/audios-total-count`, {
      headers: {
        Authorization: `Bearer=${await getToken()}`,
      },
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

const getAudiosByProfile = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/profile/audios`, {
      headers: {
        Authorization: `Bearer=${await getToken()}`,
      },
    });
    return data.audios;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

const getAutoGeneratedPlaylists = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/profile/auto-generated-playlists`, {
      headers: {
        Authorization: `Bearer=${await getToken()}`,
      },
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

const ProfileService = {
  getProfileApi,
  getRecommendedAudiosApi,
  getAudiosTotalCountByProfile,
  getAudiosByProfile,
  getAutoGeneratedPlaylists,
};

export default ProfileService;
