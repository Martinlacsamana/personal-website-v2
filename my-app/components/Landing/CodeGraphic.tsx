import React from 'react'

const CodeGraphic = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="mockup-code w-2/3" id='dominoes'>
                <pre data-prefix="$"><code>npm i childhood</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Dad: The unknown is terrifying, but growth comes from facing it head-on.</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Mom: Don't forget to be kind and make a difference where you can, anak.</code></pre>
                <pre data-prefix="?" className="text-error"><code>Brothers: Try not to fu^k up.</code></pre>
                <pre data-prefix=">" className="text-success"><code>Brothers: We love you.</code></pre>
                
                <pre data-prefix=">" className=""><code>...</code></pre>
                <pre data-prefix=">" className="text-success"><code>Noted.</code></pre>

            </div>

        </div>
        
    )

}

export default CodeGraphic