import { waitFor } from "@testing-library/dom";
import axios from "axios";
import { FetchBlogData } from "../redux/action/action";
import { vi } from "vitest";

vi.mock("axios");

//test case to check api for blog data will call properly or not by using api mocking
it("test for api of blog data", async () => {

  //test scenario
  const tempData = [{
    id: 1,
    blogTitle: "The Wildlife Conservation Society Blog",
    websiteUrl: "www.wcs.org/blog",
    description:
      "Provides insights on wildlife conservation, focusing on endangered species and biodiversity efforts worldwide.",
    author: "Wildlife Conservation Society",
    lastupdate: "Dec-24",
    focusArea: "Endangered Species, Conservation",
    facebook: "https://www.facebook.com/?hl=en",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/?hl=en",
    linkdin: "",
    imageUrl:
      "https://media.istockphoto.com/id/1158254072/photo/woman-taking-a-water-sample.jpg?s=2048x2048&w=is&k=20&c=pp_fDL4vIWpPHEVGXd8eCoZdyp3jCYXwleLm-vzmq40=",
  }];

  axios.get.mockResolvedValue({data: tempData});

  const dispatch = vi.fn();

  const blogData = await FetchBlogData(1)(dispatch);

  //expected result
  expect(axios.get).toHaveBeenCalled();

  
});
