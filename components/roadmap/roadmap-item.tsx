interface RoadmapItemProps {
  title: string
  items?: string[]
}

export const RoadmapItem = ({title, items}: RoadmapItemProps) => {
  return (
      <ul className="list-disc pl-6 relative">
        <li className="drop-shadow-md">{title}</li>

        {!!items && <ul className="list-disc pl-8 text-2xl text-left">
          {items.map((item, index) => (
              <li key={index} className="drop-shadow-md">{item}</li>
          ))}
        </ul>}
      </ul>
  )
}