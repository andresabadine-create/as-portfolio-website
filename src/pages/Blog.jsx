export default function Blog({ t }) {
  return (
    <section>
      <p className="eyebrow">{t.blogTitle}</p>
      <h1 className="page-title">{t.blogTitle}</h1>
      <p className="lead">{t.blogIntro}</p>

      <div className="blog-list">
        {t.posts.map((post) => (
          <article key={post.title} className="blog-post">
            <div className="blog-meta">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <h2 className="blog-post-title">{post.title}</h2>
            <div className="blog-body">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
