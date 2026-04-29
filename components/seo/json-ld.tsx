/**
 * Renders a JSON-LD <script> tag. Server component — safe to embed in any
 * layout/page for structured data (LocalBusiness, FAQ, Breadcrumb, etc).
 */
type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>
  id?: string
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // JSON.stringify is safe here; data shape is controlled by us, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
