import prisma from "../prisma.client.js";
class EditorService {
  async saveCode(req, res) {
    const { code, url } = req.body;
    // Use upsert to update the code if the URL exists or create a new entry if it doesn't
    const savedCode = await prisma.code.upsert({
      where: { url },
      update: { code },
      create: { code, url },
    });

    return {
      success: true,
      message: "Code saved successfully",
      data: savedCode,
    };
  }

  async fetchCode(req, res) {
    const { url } = req.params;
    // Use upsert to update the code if the URL exists or create a new entry if it doesn't
    const codeData = await prisma.code.findUnique({
        where: { url },
      });
  
      if (!codeData) {
        return {success:false,status:404, message: 'Code not found' };
      }

    return {
      success: true,
      message: "Code data fetched successfully",
      data: codeData,
    };
  }
}

export default new EditorService;
