interface RoadmapItemProps {
  title: string
  items?: string[]
}

export const RoadmapItem = ({title, items}: RoadmapItemProps) => {
  return (
      <ul className="list-disc pl-6">
        <li>{title}</li>

        {!!items && <ul className="list-['\25CB'] pl-8 text-2xl text-left">
          {items.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
        </ul>}
      </ul>
  )
}