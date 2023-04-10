import API_URLS from '@/constants/apiUrls';
import { LectureInfo } from '@/interfaces/card';

import http from './http';

interface LectureMainResponse {
  data: LectureInfo[];
  count: number;
}

const lectureMain = async () => {
  try {
    const { data }: LectureMainResponse = await http.get(API_URLS.LECTURE.MAIN);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default lectureMain;
