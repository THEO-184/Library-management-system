const express = require("express");
const router = express.Router();

const {
	createBook,
	updateBook,
	deleteBook,
	getBookCollection,
	deleteBookCollection,
} = require("../controllers/books");

router
	.route("/")
	.post(createBook)
	.get(getBookCollection)
	.delete(deleteBookCollection);
router.route("/:id").put(updateBook).delete(deleteBook);

module.exports = router;
