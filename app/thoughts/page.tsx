import Header from '../components/header';
import PageContainer from '../components/layouts/page-container';
import { Thoughts } from '../components/thoughts';
import { getPosts } from './utils';

export const metadata = {
	title: 'Blogs',
	description: 'My Blogs - Icelinea',
};

export default function ThoughtsPage() {
	const posts = getPosts();

	return (
		<PageContainer>
			<Header title='Blogs' />
			<Thoughts posts={posts} />
		</PageContainer>
	);
}
