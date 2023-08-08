import React, { useState } from "react";
import { Rate, Input, Button, Upload, List, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { RcFile } from "antd/lib/upload";

const { TextArea } = Input;

interface Review {
  id: number;
  rating: number;
  reviewText: string;
  images?: RcFile[];
}

interface ReviewWidgetProps {
  onSubmit: (review: ReviewData) => void;
  reviews: Review[];
}

interface ReviewData {
  rating: number;
  reviewText: string;
  images: RcFile[];
}

const ReviewWidget: React.FC<ReviewWidgetProps> = ({ onSubmit, reviews }) => {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [imageList, setImageList] = useState<RcFile[]>([]);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleReviewTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReviewText(e.target.value);
  };

  const handleImageUpload = (info: any) => {
    setImageList(info.fileList);
  };

  const handleSubmitReview = () => {
    const reviewData: ReviewData = {
      rating,
      reviewText,
      images: imageList,
    };
    onSubmit(reviewData);
    message.success("Review submitted successfully!");
    // Reset the form
    setRating(0);
    setReviewText("");
    setImageList([]);
  };

  return (
    <div className="review-widget">
      {/* <div className="star-rating">
        <Rate value={rating} onChange={handleRatingChange} />
      </div>
      <TextArea
        className="text-review"
        placeholder="Share your experience..."
        value={reviewText}
        onChange={handleReviewTextChange}
        rows={4}
      />
      <Upload
        listType="picture"
        accept="image/*"
        fileList={imageList}
        customRequest={() => {}}
        onChange={handleImageUpload}
      >
        <Button icon={<UploadOutlined />}>Upload Images</Button>
      </Upload>
      <Button
        className="submit-review"
        type="primary"
        onClick={handleSubmitReview}
      >
        Submit Review
      </Button> */}

      <div className="review-list">
        <List
          itemLayout="vertical"
          dataSource={reviews}
          renderItem={(item: Review) => (
            <List.Item key={item.id}>
              <div>
                <Rate disabled value={item.rating} />
                <p>{item.reviewText}</p>
                {item.images &&
                  item.images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Review Image ${index}`}
                    />
                  ))}
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ReviewWidget;
