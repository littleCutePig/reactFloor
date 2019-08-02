import Mock from "mockjs";
import { data } from "./data";
Mock.mock("/api/list", data);
