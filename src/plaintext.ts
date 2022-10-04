const createBulletItem = (item: string) => `* ${item}`;

const getPlainTextBody = (flashCard: FlashCardInformation) => {
	return `**${flashCard.name} - ${flashCard.headline}**

> ${flashCard.description}

Strengths:
${flashCard.techStrenghts.map(createBulletItem).join("\n")}

Business:
${flashCard.businesStrengths.map(createBulletItem).join("\n")}`;
};

export default getPlainTextBody;
