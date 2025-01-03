/*
 * @Author: wumingyue
 * @Date: 2024-12-19 16:53:23
 * @Desc: 
 */
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h2>我是template</h2>
            {children}
        </div>
    )
}
