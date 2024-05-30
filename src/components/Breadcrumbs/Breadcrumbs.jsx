
import './Breadcrumbs.css';
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);
	let breadcrumbPath = "";

	return (
		<div className="breadcrumbs">
			<Link to="/">Главная страница</Link>
			{pathnames.map((name, index) => {
				breadcrumbPath += `/${name}`;
				const isLast = index === pathnames.length - 1;
				console.log(pathnames, breadcrumbPath);

				return isLast ? (
					<span key={breadcrumbPath}> / {name}</span>
				) : (
					<span key={breadcrumbPath}>
						{" "}
						/ <Link to={breadcrumbPath}>{name}</Link>
					</span>
				);
			})}
		</div>
	);
};

export default Breadcrumbs;
