const createBulletItem = (item: string) => `* ${item}`;

const getPlainTextBody = (flashCard: FlashCardInformation) => {
	return `**${flashCard.name} - ${flashCard.headline}**

> ${flashCard.description}

Strengths:
${flashCard.techStrenghts.map(createBulletItem)}

Business:
${flashCard.businesStrengths.map(createBulletItem)}`;
};

export default getPlainTextBody;
