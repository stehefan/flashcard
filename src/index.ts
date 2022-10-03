import getPlainTextBody from "./plaintext";

const DEFAULT_CONTENT_TYPE = "text/plain";
const ALLOWED_ACCEPT_HEADERS = ["*/*", "text/plain", "application/json"];

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
		headline: "Something Something Cloud & Architecture",
		description:
			"I love building teams, applications and infrastructures - being the glue on the intersection of al three. " +
			"Enabling companies and teams to build applications that can utilize DevOps principles and serve both the " +
			"enduser and the developers continuing to improve them.",
		techStrenghts: [
			"Everything DevOps & Infrastructure",
			"Cloud-Architecture",
			"Cloud-Applications",
			"Fullstack Development",
		],
		businesStrengths: [
			"Building Products and Teams",
			"Enabling Platform and DevOps Teams",
			"Creating fully cloud-enabled Product Teams",
		],
	};

	const responseConfiguration = {
		headers: {
			"content-type": contentType,
		},
	};

	if (contentType === "application/json") {
		return Response.json(flashCard, responseConfiguration);
	}

	return new Response(getPlainTextBody(flashCard), responseConfiguration);
};

export default {
	fetch: fetchFunction,
};
