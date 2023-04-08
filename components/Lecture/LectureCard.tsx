import { Box, Card, Flex, Spacer, Tag, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import StarRatings from 'react-star-ratings';

import { LectureInfo, LectureScoreDetail } from '@/interfaces/card';

const ScoreDetail = ({
  lectureSatisfactionAvg,
  lectureHoneyAvg,
  lectureLearningAvg,
}: LectureScoreDetail) => (
  <Flex p="12px 24px" gap="24px" borderTop="1px" borderColor="suwiki.lightGray">
    <Flex gap="8px" align="center">
      <Text fontSize="13px" lineHeight="1">
        만족도
      </Text>
      <Text color="suwiki.main" fontWeight="500" lineHeight="1">
        {lectureSatisfactionAvg.toFixed(1)}
      </Text>
    </Flex>
    <Flex gap="8px" align="center">
      <Text fontSize="13px" lineHeight="1">
        꿀강지수
      </Text>
      <Text color="suwiki.main" fontWeight="500" lineHeight="1">
        {lectureHoneyAvg.toFixed(1)}
      </Text>
    </Flex>
    <Flex gap="8px" align="center">
      <Text fontSize="13px" lineHeight="1">
        배움지수
      </Text>
      <Text color="suwiki.main" fontWeight="500" lineHeight="1">
        {lectureLearningAvg.toFixed(1)}
      </Text>
    </Flex>
  </Flex>
);

const LectureCard = ({
  id,
  lectureName,
  lectureType,
  majorType,
  professor,
  lectureHoneyAvg,
  lectureLearningAvg,
  lectureSatisfactionAvg,
  lectureTotalAvg,
}: LectureInfo) => {
  const router = useRouter();
  const [isDetailOn, setIsDetailOn] = useState(false);

  const handleClickCard = () => {
    router.push(`/lectureinfo?id=${id}`);
  };
  const handleClickDetail = (e: MouseEvent) => {
    setIsDetailOn(!isDetailOn);
    e.stopPropagation();
  };

  return (
    <Card
      borderColor="suwiki.lightGray"
      borderRadius="10px"
      variant="outline"
      w="100%"
      onClick={handleClickCard}
    >
      <Box p="14px 24px">
        <Flex align="flex-end">
          <Text
            color="suwiki.black"
            fontSize="18px"
            fontWeight="500"
            lineHeight="1"
          >
            {lectureName}
          </Text>
          <Spacer />
          <Tag fontSize="12px" bgColor="suwiki.normalGray" borderRadius="10px">
            {lectureType}
          </Tag>
        </Flex>
        <Text color="suwiki.lightBlack" fontSize="14px" mb="6px">
          {majorType} | {professor}
        </Text>
        <Flex align="flex-end">
          <StarRatings
            rating={lectureTotalAvg}
            starRatedColor="#336af8"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
          <Text
            color="suwiki.main"
            fontSize="18px"
            fontWeight="500"
            ml="4px"
            lineHeight="normal"
          >
            {lectureTotalAvg.toFixed(1)}
          </Text>
          <Text
            color="suwiki.lightBlack"
            fontSize="12px"
            ml="6px"
            decoration="underline"
            cursor="pointer"
            onClick={handleClickDetail}
          >
            {isDetailOn ? '간략히' : '자세히'}
          </Text>
        </Flex>
      </Box>
      {isDetailOn && (
        <ScoreDetail
          lectureHoneyAvg={lectureHoneyAvg}
          lectureLearningAvg={lectureLearningAvg}
          lectureSatisfactionAvg={lectureSatisfactionAvg}
        />
      )}
    </Card>
  );
};

export default LectureCard;
