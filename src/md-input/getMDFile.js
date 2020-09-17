function githubLinkToRawLink(inputLink) {
	// const link = `https://github.com/markdown-it/markdown-it/blob/master/README.md`;
	const link = inputLink;
	const linkUserSplit = link.split('/');
	const linkPathSplit = link.split('blob');
	const userAndRepo = `${linkUserSplit[3]}/${linkUserSplit[4]}`;
	const filePath = linkPathSplit[1];
	const rawLink = `https://raw.githubusercontent.com/${userAndRepo}${filePath}`;
	return rawLink;
}

export default async function getMDFile(mdLink) {
	let text = '';
	const mdRawFileLink = githubLinkToRawLink(mdLink);
	try {
		const rawResponse = await fetch(mdRawFileLink, {
			method: 'GET',
			headers: {
				'Content-Type': 'text/plain',
			},
		});
		text = await rawResponse.text();
	} catch (error) {
		console.warn('Ошибка Запроса!');
	}
	return text;
}
