import React from "react";
import { POST } from "../../posts";
import Card from "../card/card.component";

const PostPreview = () => {
  return (
    <section>
      <Card dangerouslySetInnerHTML={{ __html: POST.content }}></Card>
    </section>
  );
};

export default PostPreview;
