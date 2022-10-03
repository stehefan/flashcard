const createBulletItem = (item: string) => `* ${item}`;

const getPlainTextBody = (flashCard: FlashCardInformation) => {
	return `**${flashCard.name} - ${flashCard.headline}**

> ${flashCard.description}

Strengths:
${flashCard.strengths.map(createBulletItem)}

Business:
${flashCard.businesses.map(createBulletItem)}`;
};

export default getPlainTextBody;
