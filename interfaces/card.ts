export interface LectureScoreDetail {
  lectureSatisfactionAvg: number;
  lectureHoneyAvg: number;
  lectureLearningAvg: number;
}

export interface LectureInfo extends LectureScoreDetail {
  id: number;
  lectureName: string;
  lectureType: string;
  majorType: string;
  professor: string;
  lectureTotalAvg: number;
}
