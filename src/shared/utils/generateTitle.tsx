export default function generateTitle(title: string): string {
	return `${process.env.APP_NAME} - ${title}`;
}
