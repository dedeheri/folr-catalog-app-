const { validationResult } = require("express-validator");
const feedbacks = require("../../model/feedback");

async function addFeedBack(req, res) {
  const id = req.decode.id;
  const urlFeedback = req.body.urlFeedback;
  const feedback = req.body.feedback;
  const expression = req.body.expression;

  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.mapped() });
  }

  try {
    await new feedbacks({
      userId: id,
      expression,
      urlFeedback,
      feedback,
    }).save();
    return res.status(200).json({
      message: "Terima kasih, masukan anda sangat berarti untuk kemajuan kami",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
}

module.exports = { addFeedBack };
