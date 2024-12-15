import EditorService from "../services/editor.service.js";
import SuccessResponse from "../lib/success.res.js";
const saveCode = async (req, res, next) => {
  if (!req.body.code || !req.body.url) {
    return res.status(400).json({ message: "Code and URL are required!" });
  }
  try {
    const result = await EditorService.saveCode(req, res);
    if (!result.success)
      return res.status(result.errorCode).json({ error: result.message });
    return SuccessResponse.ok(res, result.message, result.data);
  } catch (error) {
    console.error("Error saving code:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchCode = async (req, res, next) => {
  if (!req.params.url) {
    return res.status(400).json({ message: "URL is required!" });
  }
  try {
    const result = await EditorService.fetchCode(req, res);
    if (!result.success)
      return res.status(result.status).json({ error: result.message });
    return SuccessResponse.ok(res, result.message, result.data);
  } catch (error) {
    console.error("Error saving code:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { saveCode, fetchCode };
