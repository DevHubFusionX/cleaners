import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Comtranz Global Facility Management';
const SITE_URL = 'https://www.comtranzglobal.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({
    title,
    description,
    path = '/',
    type = 'website',
    image = DEFAULT_IMAGE,
    structuredData = null,
    noIndex = false,
    article = null, // { publishedTime, modifiedTime, author, section }
}) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Premium Facility Management in Nigeria`;
    const canonicalUrl = `${SITE_URL}${path}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_NG" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Article Tags (for blog posts) */}
            {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
            {article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
            {article?.author && <meta property="article:author" content={article.author} />}
            {article?.section && <meta property="article:section" content={article.section} />}

            {/* JSON-LD Structured Data */}
            {structuredData && (
                Array.isArray(structuredData) ? (
                    structuredData.map((data, index) => (
                        <script key={index} type="application/ld+json">
                            {JSON.stringify(data)}
                        </script>
                    ))
                ) : (
                    <script type="application/ld+json">
                        {JSON.stringify(structuredData)}
                    </script>
                )
            )}
        </Helmet>
    );
};

export default SEO;
