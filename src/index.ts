const DEFAULT_CONTENT_TYPE = "text/plain";
const ALLOWED_ACCEPT_HEADERS = ["text/plain", "application/json"];

const fetchFunction: ExportedHandlerFetchHandler = async (request) => {
	const contentType: string = request.headers.get("Accept")
		? request.headers.get("Accept")!
		: DEFAULT_CONTENT_TYPE;

	if (!ALLOWED_ACCEPT_HEADERS.includes(contentType)) {
		const allowedList = ALLOWED_ACCEPT_HEADERS.map(
			(header) => `'${header}'`
		).join(", ");

		return new Response(
			`Can't accept ${contentType}, only the following Content-Types are supported: ${allowedList}`,
			{
				status: 406,
			}
		);
	}

	const flashCard: FlashCardInformation = {
		name: "Stefan Lier",
		description: "Lorem Ipsum",
		strengths: ["something"],
		businesses: ["business2"],
	};

	const responseConfiguration = {
		headers: {
			"content-type": contentType,
		},
	};

	if (contentType === "application/json") {
		return Response.json(flashCard, responseConfiguration);
	}

	return new Response(
		`${flashCard.name}
----
${flashCard.description}
----
Strengths:
${flashCard.strengths.map((strength) => ` * ${strength}`)}
----
Business:
${flashCard.businesses.map((business) => ` * ${business}`)}
----
		`,
		responseConfiguration
	);
};

export default {
	fetch: fetchFunction,
};
